<?php
namespace App\Support\Image;

use Illuminate\Support\{
    Carbon,
    Str
};
use Intervention\Image\Image;

class StoreImage
{
    private string $storageDir;

    private CreateThumbnail $thumbnails;

    private static array $extensions = [
        'image/jpeg' => 'jpeg',
        'image/png' => 'png',
        'image/gif' => 'gif',
    ];

    public function __construct(string $storageDir) {
        if (!is_dir($storageDir)) {
            throw new \InvalidArgumentException(
                'Could not locate storage directory.'
            );
        }

        $this->storageDir = $storageDir;

        $this->thumbnails = (new CreateThumbnail($storageDir . '/thumbs'));
    }

    public function store(Image $image)
    {
        if (!isset(static::$extensions[$mime = $image->mime()])) {
            throw new \Exception('Invalid filetype');
        }

        $filename = Carbon::now()->getTimestamp() . '-' . Str::uuid();
        
        $ext = static::$extensions[$mime];
        $fullname = $this->storageDir . '/' . ($fn = ($filename . '.' . $ext));

        try {
            $image->save($fullname);
            $this->thumbnails->create($image, $fn);
            
        } catch (\Throwable $e) {
            throw $e;
        }

        return $fn;
    }
}
