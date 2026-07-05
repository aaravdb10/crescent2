<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\JsonResponse;

class StateController extends Controller
{
    /**
     * Retrieve all states.
     */
    public function index(): JsonResponse
    {
        // Retrieve and return a list of all states from MongoDB
        return response()->json([
            'status' => 'success',
            'data' => [] // Private implementation
        ]);
    }
}
