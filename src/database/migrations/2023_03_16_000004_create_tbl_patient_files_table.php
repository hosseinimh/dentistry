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
            $table->text('home_address')->nullable();
            $table->text('work_address')->nullable();
            $table->string('lesion_classification')->nullable();
            $table->enum('patient_referal', ['patient', 'relatives', 'general_practitioner', 'general_dentist', 'specialist', 'specialit_dentist'])->nullable();
            $table->string('special_lesion_classification')->nullable();
            $table->text('chief_compliant')->nullable();
            $table->text('chief_compliant_history')->nullable();
            $table->text('time_interval')->nullable();
            $table->text('referal_history')->nullable();
            $table->text('treatment_history')->nullable();
            $table->string('systemic_disease_history')->nullable();
            $table->string('item_8_description')->nullable();
            $table->string('item_15_description')->nullable();
            $table->string('item_16_description')->nullable();
            $table->string('item_17_description')->nullable();
            $table->string('item_20_description')->nullable();
            $table->string('item_21_description')->nullable();
            $table->string('item_25_1_description')->nullable();
            $table->string('item_25_2_description')->nullable();
            $table->string('item_25_3_description')->nullable();
            $table->string('item_30_description')->nullable();
            $table->string('item_32_description')->nullable();
            $table->string('item_34_description')->nullable();
            $table->unsignedTinyInteger('tobacco_use')->nullable();
            $table->string('use_tobacco_duration')->nullable();
            $table->string('use_tobacco_type')->nullable();
            $table->unsignedTinyInteger('drug_use')->nullable();
            $table->string('use_drug_duration')->nullable();
            $table->string('use_drug_type')->nullable();
            $table->unsignedTinyInteger('alcohol')->nullable();
            $table->string('pulse')->nullable();
            $table->string('body_temp')->nullable();
            $table->string('blood_pressure')->nullable();
            $table->string('resporate')->nullable();
            $table->string('weight')->nullable();
            $table->string('height')->nullable();
            $table->string('bmi')->nullable();
            $table->string('familial_history')->nullable();
            $table->string('fca_type')->nullable();
            $table->text('face_assymetry')->nullable();
            $table->text('face_pigmentation')->nullable();
            $table->text('face_other_pathalogical')->nullable();
            $table->text('neck_assymetry')->nullable();
            $table->text('neck_ty_examination')->nullable();
            $table->text('lymph_nodes')->nullable();
            $table->string('tomporomandibular_joint')->nullable();
            $table->string('other_signs_tmj_description')->nullable();
            $table->text('intra_oral_examination')->nullable();
            $table->text('retromolar_area')->nullable();
            $table->text('gums')->nullable();
            $table->text('toothless_ridge')->nullable();
            $table->text('hard_soft_palate')->nullable();
            $table->text('tongue_dorsal')->nullable();
            $table->text('tongue_ventral')->nullable();
            $table->text('tongue_pharyngeal')->nullable();
            $table->text('neurological_changes')->nullable();
            $table->text('salivary_grand_examination')->nullable();
            $table->text('dental_changes_examination')->nullable();
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
