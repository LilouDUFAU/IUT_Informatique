# Guide Complet pour un Projet Laravel

## 📌 Création du Projet

### 🛠 Créer un projet Laravel
Dans le terminal, exécutez :
```bash
laravel new <nomProjet>
```

### 📂 Aller dans le projet
```bash
cd <nomProjet>
```
___

## 🚀 Premiers Pas

### 📌 Migrer la base de données
```bash
php artisan migrate
```

**💡 En cas d'erreur :** 
Modifiez `app/Providers/AppServiceProvider.php` :
```php
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider {
    ...
    public function boot(): void
    {
        Schema::defaultStringLength(191);
    }
}
```

### ▶️ Démarrer le serveur
```bash
php artisan serve
```
___

## 🏗 Modèles et Migrations

### 🔹 Créer un modèle avec sa migration
```bash
php artisan make:model <nomModel> -m
```

### 🔹 Modifier le modèle
Fichier : `app/Models/<nomModel>.php`
```php
class <nomModel> extends Model
{
    use HasFactory;

    protected $fillable = [
        '<attribut1>',
        '<attribut2>',
        '<attribut3>',
        '<attributX>'
    ];
}
```

### 🔹 Définir les relations
```php
// Un élément a une relation unique
public function <relation>() {
    return $this->hasOne(<nomModel>::class, 'id', '<relation>');
}

// Un élément appartient à une autre table
public function <relation>() {
    return $this->belongsTo(<nomModel>::class, '<relation>', 'id');
}

// Un élément a plusieurs relations
public function <relation>() {
    return $this->hasMany(<nomModel>::class, 'id', 'id');
}
```

### 🔹 Modifier la migration
Fichier : `database/migrations/<nomMigration>.php`
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('<nomTable>', function (Blueprint $table) {
            $table->id('<attribut1>');
            $table->boolean('<attribut2>');
            $table->type('<nomCleEtrangere>');
            $table->foreign('<nomCleEtrangere>')->references('<nomClePrimaire>')->on('<nomTableReferencee>');
            $table->timestamps();
        });
    }
};
```

### 🔄 Mettre à jour la base de données
```bash
php artisan migrate:fresh
```
___

## 🌱 Seeder (Données de test)

### 🔹 Créer un seeder
```bash
php artisan make:seeder <nomTableSeeder>
```

### 🔹 Modifier le fichier du seeder
Fichier : `database/seeders/<nomSeeder>.php`
```php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class <nomSeeder> extends Seeder
{
    public function run(): void
    {
        DB::table('<nomTable>')->insert([
            [
                'nom' => '<nom1>',
                'email' => '<email1>',
                'password' => Hash::make('<password1>'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nom' => '<nom2>',
                'email' => '<email2>',
                'password' => Hash::make('<password2>'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
```

### 🔹 Ajouter le seeder dans `DatabaseSeeder.php`
```php
public function run(): void
{
    $this->call(<nomSeeder>::class);
}
```

### 🔹 Exécuter le seeder
```bash
php artisan db:seed --class=<nomSeeder>
```

### 🔄 Réinitialiser la base et exécuter les seeders
```bash
php artisan migrate:fresh --seed
```
___

## 🎮 Controller & Routes

### 🔹 Créer un controller
```bash
php artisan make:controller <nomController> --resource
```

### 🔹 Définir les routes
Fichier : `routes/web.php`
```php
use App\Http\Controllers\<nomController>;

Route::resource('<nomRoute>', <nomController>::class);
```

### 🔍 Vérifier les routes
```bash
php artisan route:list
```
___

## 🔐 Authentification

### 🔹 Mettre en place l'authentification
```bash
composer require laravel/ui
php artisan ui bootstrap --auth
npm install
npm run build
npm run dev
```

### 🔹 Modifier le controller
Fichier : `app/Http/Controllers/<nomController>.php`
```php
use Illuminate\Http\Request;
use App\Models\<nomModel>;

class <nomController> extends Controller
{
    public function index()
    {
        $items = <nomModel>::paginate(5);
        return view('<nomVue>.index', compact('items'));
    }

    public function create()
    {
        return view('<nomVue>.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:<nomTable>,email',
        ]);

        <nomModel>::create($request->all());
        return redirect()->route('<nomRoute>.index')->with('success', 'Ajouté avec succès.');
    }
}
```
___

## 🎨 Les Vues
Créez les vues et ajoutez **Bootstrap** ou **Tailwind CSS** pour le style. 🎨🚀

### 🔹 Exemple de Vue Index (`resources/views/<nomVue>/index.blade.php`)
```php
@extends('layouts.app')

@section('content')
    <h1>Liste des éléments</h1>
    <a href="{{ route('<nomRoute>.create') }}" class="btn btn-primary">Ajouter</a>
    <table class="table">
        <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        @foreach ($items as $item)
        <tr>
            <td>{{ $item->nom }}</td>
            <td>{{ $item->email }}</td>
            <td>
                <a href="{{ route('<nomRoute>.edit', $item) }}" class="btn btn-warning">Modifier</a>
                <form action="{{ route('<nomRoute>.destroy', $item) }}" method="POST" style="display:inline;">
                    @csrf @method('DELETE')
                    <button type="submit" class="btn btn-danger">Supprimer</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>
@endsection
```

