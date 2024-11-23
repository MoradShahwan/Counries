$("#all").on("click", () => {
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        success: function (res) {
            const allCountries = res;
            let total_population = 0;
            let europe_counter = 0;
            let africa_counter = 0;
            let oceania_counter = 0;
            let asia_counter = 0;
            let americas_counter = 0;
            let antarctic_counter = 0;
            $("#myResult").html('');
            $("#countires").html('');
            $("#statics").html('');
            $.each(allCountries, function (index, country) {
                total_population += country.population;
                switch(country.region){
                    case "Europe":
                        europe_counter++;
                        break;
                    case "Oceania":
                        oceania_counter++
                        break;
                    case "Asia":
                        asia_counter++;
                        break;
                    case "Americas":
                        americas_counter++;
                        break;
                    case "Africa":
                        africa_counter++;
                        break;
                    case "Antarctic":
                        antarctic_counter++;
                        break;
                }
                $("#countries").append(
                    `
                    <tr>
                    <td>${country.name.official}</td>
                    <td>${country.population}</td>
                    </tr>
                    
                    `
                );
            });
            $("#myResult").append(
                `
                    Total Countries Result: ${allCountries.length} <br>
                    Total Countries Population: ${total_population} <br>
                    Average Population: ${total_population / allCountries.length} <br>
                `
            );
            $("#statics").append(
                `
                <tr>
                <td>Africa</td>
                <td>${africa_counter}</td>
                </tr>
                <tr>
                <td>Antarctic</td>
                <td>${antarctic_counter}</td>
                </tr>
                <tr>
                <td>Americas</td>
                <td>${americas_counter}</td>
                </tr>
                <tr>
                <td>Asia</td>
                <td>${asia_counter}</td>
                </tr>
                <tr>
                <td>Oceania</td>
                <td>${oceania_counter}</td>
                </tr>
                <tr>
                <td>Europe</td>
                <td>${europe_counter}</td>
                </tr>
                `
            );
            
        }
    })
});

$("#search").on("click", () => {
    const country_name = $("#country").val();
    $.ajax({
        url: `https://restcountries.com/v3.1/name/${country_name}`,
        success: function (res) {
            const Countries = res;
            let total_population = 0;
            let europe_counter = 0;
            let africa_counter = 0;
            let oceania_counter = 0;
            let asia_counter = 0;
            let americas_counter = 0;
            let antarctic_counter = 0;
            $("#myResult").html('');
            $("#countires").html('');
            $("#statics").html('');
            $.each(Countries, function (index, country) {
                total_population += country.population;
                switch(country.region){
                    case "Europe":
                        europe_counter++;
                        break;
                    case "Oceania":
                        oceania_counter++
                        break;
                    case "Asia":
                        asia_counter++;
                        break;
                    case "Americas":
                        americas_counter++;
                        break;
                    case "Africa":
                        africa_counter++;
                        break;
                    case "Antarctic":
                        antarctic_counter++;
                        break;
                }
                $("#countries").append(
                    `
                    <tr>
                    <td>${country.name.official}</td>
                    <td>${country.population}</td>
                    </tr>
                    
                    `
                );
            });
            $("#myResult").append(
                `
                    Total Countries Result: ${Countries.length} <br>
                    Total Countries Population: ${total_population} <br>
                    Average Population: ${total_population / Countries.length} <br>
                `
            );
            $("#statics").append(
                `
                <tr>
                <td>Africa</td>
                <td>${africa_counter}</td>
                </tr>
                <tr>
                <td>Antarctic</td>
                <td>${antarctic_counter}</td>
                </tr>
                <tr>
                <td>Americas</td>
                <td>${americas_counter}</td>
                </tr>
                <tr>
                <td>Asia</td>
                <td>${asia_counter}</td>
                </tr>
                <tr>
                <td>Oceania</td>
                <td>${oceania_counter}</td>
                </tr>
                <tr>
                <td>Europe</td>
                <td>${europe_counter}</td>
                </tr>
                `
            );
        }
    });
});

