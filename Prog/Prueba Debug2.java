
class EjemploDebug2 {

    public static void main(String[] args) {
        int j; // contador del bucle externo
        int i; // contador del bucle interno

        for (j = 1; j < 5; j++) {
            for (i = 1; i < 3; i++) {
                System.out.println(i + " x " + j + " = " + i * j); // coloca aquí el breakpoint
            }
        }
    }
}