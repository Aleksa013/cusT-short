<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\T-shirt>
 */
class TShirtFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => fake()->randomElement(['polo', 'classic', 'pocket']),
            'size' => fake()->randomElement(['S','M','L','XS','XL','XXL','XXXl']),
            'fabric_type' => fake()->randomElement(['cotton', 'viscose', 'elastane']),
            'color' => fake()->randomElement(['black', 'white', 'red']),
        ];
    }
}
