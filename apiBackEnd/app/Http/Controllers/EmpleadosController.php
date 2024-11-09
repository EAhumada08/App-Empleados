<?php

namespace App\Http\Controllers;

use App\Models\Empleados;
use Illuminate\Http\Request;

class EmpleadosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Empleados::all(),200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        // $request->validate([
        //     'nombre' => 'required|string',
        //     'apellido' => 'required|string',
        // ]);
        $empleado = Empleados::create($request->all());
        return response()->json($empleado,201);


    }

   
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $empleado = Empleados::find($id);
        if(is_null($empleado)){
            return response()->json(["mensaje" => "Empleado no encontrado"],404);
        }
        return response()->json($empleado,200);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $empleado = Empleados::find($id);
        if(is_null($empleado)){
            return response()->json(["mensaje" => "Empleado no encontrado"],404);
        }
        $empleado->update($request->all());
        return response()->json($empleado,201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $empleado = Empleados::find($id);
        if(is_null($empleado)){
            return response()->json(["mensaje" => "Empleado no encontrado"],404);
        }
        $empleado->delete();
        return response()->json(['message' => 'Usuario eliminado con éxito']);
    }
}
