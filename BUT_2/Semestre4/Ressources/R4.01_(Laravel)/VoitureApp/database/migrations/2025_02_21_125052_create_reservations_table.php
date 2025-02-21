<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id('codeReservation');
            $table->Date('dateReservation');
            $table->Date('dateAller');
            $table->Date('dateRetour');
            $table->string('matricule');
            $table->integer('id');
            $table->integer('idLocation');
            $table->foreign('matricule')->references('matricule')->on('vehicules');
            $table->foreign('id')->references('id')->on('users');
            $table->foreign('idLocation')->references('idLocation')->on('dossierLocations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
