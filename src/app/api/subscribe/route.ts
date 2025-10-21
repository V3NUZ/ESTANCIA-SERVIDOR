import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      )
    }

    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Simulación de guardado en base de datos
    // En un proyecto real, aquí guardarías en tu base de datos
    console.log('Nuevo suscriptor:', email)

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        message: '¡Suscripción exitosa!',
        email: email
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en suscripción:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}