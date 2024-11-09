<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();            
            $table->string('nombre', 100); // Nombre del empleado
            $table->string('apellido', 100); // Apellido del empleado
            $table->string('email', 150)->unique(); // Correo electrónico único
            $table->string('telefono', 20)->nullable(); // Número de teléfono
            $table->string('direccion')->nullable(); // Dirección
            $table->string('posicion', 50); // Puesto o cargo
            $table->decimal('salario', 10, 2)->default(0); // Salario con dos decimales
            $table->date('fecha_contratacion'); // Fecha de contratación
            $table->enum('estado', ['activo', 'inactivo', 'suspendido'])->default('activo'); // Estado del empleado
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empleados');
    }
};
