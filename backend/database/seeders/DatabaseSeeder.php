<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use App\Models\User;
use App\Models\Design;
use App\Models\TShirt;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        TShirt::factory(5)->create();
        Design::factory(3)->create();
        Testimonial::factory(4)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
