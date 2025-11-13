class EjemploDebug {

    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int suma = sumar(a, b); // Coloca un punto de interrupción aquí
        System.out.println("La suma es: " + suma);
    }

    public static int sumar(int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }
}