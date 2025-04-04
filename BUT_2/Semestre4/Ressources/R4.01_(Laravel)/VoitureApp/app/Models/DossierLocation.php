<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DossierLocation extends Model
{
    use HasFactory;

    protected $fillable = [
        'idLocation',
        'paye',
        'reservation',
    ];

    public function reservation(){
        return $this->hasOne(Reservation::class, 'id', 'reservation');
    }
}
