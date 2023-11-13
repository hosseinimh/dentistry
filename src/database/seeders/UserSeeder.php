<?php

namespace Database\Seeders;

use App\Constants\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['username' => 'admin', 'email' => 'admin@email.com', 'role' => Role::ADMINISTRATOR, 'is_active' => 1]);
    }
}
