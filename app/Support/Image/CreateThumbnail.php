<?php
namespace App\Support\Image;

use Intervention\Image\Image;

class CreateThumbnail
{
    private string $thumbStorageDir;

    public function __construct(string $thumbStorageDir)
    {
        $this->thumbStorageDir = $thumbStorageDir;
    }

    public function create(Image $image, string $filename)
    {
        $image->resize(200, 200);
        $image->save(
            $this->thumbStorageDir . '/th_' . $filename
        );
    }
}
