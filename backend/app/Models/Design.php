<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Design extends Model
{
    /** @use HasFactory<\Database\Factories\DesignFactory> */
    use HasFactory;

        /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'design' => 'array',
        ];
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function tshirt() {
        return $this->belongsTo(TShirt::class);
    }
}
