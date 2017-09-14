<?php

namespace App\Providers;

use App\FotoEstabelecimento;
use App\Models\Moip\MoipSeller;
use App\Observables\FotoEstabelecimentoObservable;
use App\Observables\MoipSellersObservable;
use App\Observables\UsersObservable;
use App\Services\MoipAuthService;
use App\User;
use Illuminate\Support\ServiceProvider;
use Moip\Auth\OAuth;
use Moip\Moip;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Schema::defaultStringLength(191);
        FotoEstabelecimento::observe(FotoEstabelecimentoObservable::class);
        User::observe(UsersObservable::class);
        MoipSeller::observe(MoipSellersObservable::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(MoipAuthService::class, function($app) {
            $accessToken = auth()->user()->moipseller->data['accessToken'];
            $endpoint = config('moip.homologated');
            return new MoipAuthService(
                new Moip( new OAuth( $accessToken ), ($endpoint ?: Moip::ENDPOINT_SANDBOX)),
                $app->make('request')
            );
        });
    }
}
