<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'codeReservation',
        'dateReservation',
        'dateAller',
        'dateRetour'
    ];

    public function dossierLocation(){
        return $this->belongsTo(DossierLocation::class, 'reservation', 'id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'id', 'id');
    }

    public function vehicule(){
        return $this->hasMany(Vehicule::class, 'idVehicule', 'id');
    }
}
