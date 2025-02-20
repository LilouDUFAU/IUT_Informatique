public class main(){
    Client client1 = new Client("DUFAU","06.15.95.88.28");
    Client client2 = new Client("HEUZE","06.37.38.53.53");

    Table table1 = new Table("T01");
    Table table2 = new Table("T02");

    system.out.println(client1.toString())

    client1.lierMaTable(table1);
    client2.lierMaTable(table2);

    client2.delierMaTbale(table2);
    client2.lierMaTable(table1);
}