<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class DashboardController extends Controller
{
    public function index() {
            $featureMovies = Movie::whereIsFeatured(true)->get();
            $movies = Movie::all();

        return Inertia::render('User/Dashboard/Index', [
            'featureMovies' => $featureMovies,
            'movies' => $movies,
        ]);
    }
}
