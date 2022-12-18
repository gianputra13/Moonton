<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MovieController extends Controller
{
    public function show(Movie $movie)
    { 
        return Inertia::render('User/Dashboard/Movie/Show', [
            'movie' => $movie
        ]);
    }
}
