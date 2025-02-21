# Création du projet 

## Créer un projet Laravel 
Dans le terminal
```bash
laravel new <nomProjet>
``` 

## Aller dans le projet
Dans le terminal
```bash
cd <nomProjet>
```
___
# Premiers pas

## Migrer la bd
```bash
php artisan migrate
```
*** Si erreur : ***
projet→app→providers→appServiceProvider.php
```php
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider {
	…

	public function boot(): void
	{
		Schema::defaultStringLenght(191);
	}
}
```

## Démarrer le serveur 
```bash
php artisan serve
```
___
# Modèles et migrations

## Créer un model et sa migration 
Dans le terminal
```bash 
php artisan make:model <nomModel> -m
```

## Remplir les models :
projet→app→model→<nomModel>
```php
class <nomClass> extends Model
{
    use hasFactory;

    protected $fillable = [
        '<attribut1>',
        '<attribut2>',
        '<attribut3>',
        '<atributX>'
    ];
}
```

*** S' il y a des relations ***
projet→app→model→<nomModel>
```php
// si l'élément a un 
public function reservation(){
        return $this->hasOne(Reservation::class, 'id', 'reservation');
    }

// si l'élément appartient 
public function dossierLocation(){
        return $this->belongsTo(DossierLocation::class, 'reservation', 'id');
    }

// si l'élément a plusieurs 
public function reservations(){
        return $this->hasMany(Reservation::class, 'id', 'id');
    }
```

## Remplir les migrations
projet→database→migration→<nomMigration>
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('<nomMigration>', function (Blueprint $table) {
            $table->id('<attribut1>');
            $table->boolean('<attribut1>');
	    $table->type('<nomCleEtrangere>');
            $table->foreign('<nomCleEtrangere>')->references('<nomClePrimaire>')->on('<nomTableReferencee>');
            $table->timestamps();
        });
    }
}
```

## Mettre a jour la bd 
Dans le terminal
```bash
php artisan migrate:fresh
```

___
# Seeder
## Créer un seeder
Dans le terminal
```bash
php artisan make:seeder <nomTableSeeder>
```

## Modifier le fichier du seeder 
projet→database→seedee→<nomSeeder>
```php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
```

## Ajouter le seeder dans databaseSeeder
projet→database→seeders→databaseseeder
```php
public function run(): void
{
    $this->call(UsersTableSeeder::class);
}
```

## Exécuter le seeder 
Dans le terminal
```bash 
php artisan db:seed --class=UsersTableSeeder
```

## Pour réutiliser et remplir la base 
Dans le terminal
```bash 
php artisan migrate:fresh --seed
```
___
# Controller et routes

## Créer un controller 
Dans le terminal
```bash
php artisan make:controller <nomController> --resource
```

## Définir les routes :
projet→routes→web.php
```php
use App\Http\Controllers\ClientController;

Route::resource('clients', ClientController::class);
```

*** Vérifier les routes ***
Dans le terminal
```bash
php artisan route:list
```
___
# Authentification

## Mettre en place l'authentification
Dans le terminal
```bash
composer require laravel/ui
php artisan ui bootstrap --auth
npm install
npm run build
npm run dev
```

## Modifier le controller 
projet→app→http→controllers→<nomController>
```php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    // 1️⃣ Afficher la liste des clients
    public function index()
    {
        $clients = Client::paginate(5); // Paginer les résultats
        return view('clients.index', compact('clients'));
    }

    // 2️⃣ Afficher le formulaire de création
    public function create()
    {
        return view('clients.create');
    }

    // 3️⃣ Enregistrer un nouveau client
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email',
        ]);

        Client::create($request->all());
        return redirect()->route('clients.index')->with('success', 'Client ajouté avec succès.');
    }

    // 4️⃣ Afficher un client
    public function show(Client $client)
    {
        return view('clients.show', compact('client'));
    }

    // 5️⃣ Afficher le formulaire d'édition
    public function edit(Client $client)
    {
        return view('clients.edit', compact('client'));
    }

    // 6️⃣ Mettre à jour un client
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email,'.$client->id,
        ]);

        $client->update($request->all());
        return redirect()->route('clients.index')->with('success', 'Client mis à jour avec succès.');
    }

    // 7️⃣ Supprimer un client
    public function destroy(Client $client)
    {
        $client->delete();
        return redirect()->route('clients.index')->with('success', 'Client supprimé.');
    }
}
```
___
# Les vues

Faire les vues et ajouter bootstrap ou tailwind





