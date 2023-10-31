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
        Schema::create('tbl_patient_files', function (Blueprint $table) {
            $table->id();
            $table->string('file_no')->unique();
            $table->string('first_visit_date');
            $table->string('name');
            $table->string('family');
            $table->string('national_no');
            $table->string('birth_date');
            $table->string('birth_place')->nullable();
            $table->string('occupation')->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->enum('maritial_status', ['married', 'single', 'widow', 'divorced']);
            $table->enum('ethnicity', ['fars', 'lor', 'kord', 'tork', 'arab', 'balouch', 'other']);
            $table->enum('education', ['illiterate', 'elementary', 'high_school', 'diploma', 'associate', 'bachelor', 'above_bachelor']);
            $table->string('spouse_occupation')->nullable();
            $table->string('spouse_relationship')->nullable();
            $table->string('children_no');
            $table->string('tel')->nullable();
            $table->string('mobile')->nullable();
            $table->string('relative_mobile')->nullable();
            $table->string('home_address')->nullable();
            $table->string('work_address')->nullable();
            $table->string('lesion_classification')->nullable();
            $table->enum('patient_referal', ['patient', 'relatives', 'general_practitioner', 'general_dentist', 'specialist', 'specialit_dentist']);
            $table->string('special_lesion_classification')->nullable();
            $table->string('chief_compliant')->nullable();
            $table->string('chief_compliant_history')->nullable();
            $table->string('time_interval')->nullable();
            $table->string('referal_history')->nullable();
            $table->string('treatment_history')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_patient_files', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
