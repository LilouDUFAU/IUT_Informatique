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
        Schema::create('dossier_locations', function (Blueprint $table) {
            $table->id('idLocation');
            $table->boolean('paye');
            $table->integer('codeReservation');
            $table->foreign('codeReservation')->references('codeReservation')->on('reservations')->onDelete('cascade');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dossier_locations');
    }
};
