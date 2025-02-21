<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sauce extends Model
{
    use HasFactory;
    protected $fillable = ['name','userId'];

    //Ajouter une sauce en bd
    public function addSauce($sauce){
        $this->name = $sauce;
        $this->userId = auth()->user()->id;
        $this->manufacturer = $sauce;
        $this->description = $sauce;
        $this->mainPepper = $sauce;
        $this->imageUrl = $sauce;
        $this->heat = $sauce;
        $this->save();
    }


}
