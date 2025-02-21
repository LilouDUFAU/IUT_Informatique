1. Créer un projet Laravel :
```bash
laravel new <nomProjet>
``` 

2. Aller dans le projet
```bash
cd <nomProjet>
```

3. Migrer la bd :
```bash
php artisan migrate
```

4. Si erreur :
→app→providers→appServiceProvider.php

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

5. Démarrer le serveur :
```bash 
php artisan serve
```

6. Créer un model et sa migration :
```bash 
php artisan make:model <nomModel> -m
```

7. Remplir les models :
→app→model→<nomModel>

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

8. Si il y a des relations :
→app→model→<nomModel>

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

9. Remplir les migrations
→database→migration→<nomMigration>
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

10. Mettre a jour la bd :
```bash
php artisan migrate:fresh
```

11. Créer un seeder
```bash
php artisan make:seeder <nomModel>TableSeeder
``

12. Inserer une valeur pour le seeder
```php

