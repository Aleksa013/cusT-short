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
        Schema::create('t_shirts', function (Blueprint $table) {
            $table->id();
            $table->text('type');
            $table->enum('size',['S','M','L','XS','XL','XXL','XXXl']);
            $table->text('fabric_type')->nullable();
            $table->text('color');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t-shirts');
    }
};
