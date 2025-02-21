<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    use HasFactory;

    protected $fillable = [
        'matricule',
        'modele',
        'nbPlace',
        'prix',
        'dispo'
    ];

    public function reservations(){
        return $this->belongsTo(Reservation::class, 'idVehicule', 'id');
    }
}
