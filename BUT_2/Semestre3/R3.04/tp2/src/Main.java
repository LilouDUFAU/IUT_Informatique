public class Main {
    public static void main(String[] args) {

        PieceSimple levier = new PieceSimple();
        levier.setLibelle("levier");
        levier.setPrice(4);

        PieceSimple molette = new PieceSimple();
        molette.setLibelle("molette");
        molette.setPrice(3);

        PieceSimple bouton = new PieceSimple();
        bouton.setLibelle("bouton");
        bouton.setPrice(5);

        PieceSimple rondelle = new PieceSimple();
        rondelle.setLibelle("rondelle");
        rondelle.setPrice(1);

        PieceCompose manette = new PieceCompose();
        manette.setLibelle("manette");
        manette.setPrice(2);
        manette.setLstPiece();


        System.out.println(bouton.toString());

    }
}