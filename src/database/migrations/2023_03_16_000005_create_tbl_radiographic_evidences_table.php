<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_radiographic_evidences', function (Blueprint $table) {
            $table->id();
            $table->text('radiographic_evidence');
            $table->string('path')->nullable();
            $table->unsignedBigInteger('patient_file_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('patient_file_id')->references('id')->on('tbl_patient_files');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_radiographic_evidences', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
