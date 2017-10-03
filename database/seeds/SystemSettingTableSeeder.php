<?php

use Illuminate\Database\Seeder;

class SystemSettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $systemSetting = new \App\Models\SystemSetting();

        $systemSetting->data = [
            'delivery_fee' => 11.50
        ];

        $systemSetting->save();
    }
}
