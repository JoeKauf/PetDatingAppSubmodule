import { firebase } from '../firebaseConfig'
import { useSelector, useDispatch } from "react-redux";
import { addPet } from '../redux/mypets';

// Helper function
function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,
                     dateString.substring(3,5)
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.days + dayString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString;
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString;
  else ageString = "Oops! Age not found!";

  return ageString;
}

function breedIdToString(breedArray, isDog) {
    dog = [
        { label: 'Affenpinscher', value: '1' },
        { label: 'Afghan Hound', value: '2' },
        { label: 'Airedale Terrier', value: '3' },
        { label: 'Akita', value: '4' },
        { label: 'Alaskan Malamute', value: '5' },
        { label: 'American Bulldog', value: '6' },
        { label: 'American English Coonhound', value: '7' },
        { label: 'American Eskimo Dog', value: '8' },
        { label: 'American Foxhound', value: '9' },
        { label: 'American Hairless Terrier', value: '10' },
        { label: 'American Leopard Hound', value: '11' },
        { label: 'American Staffordshire Terrier', value: '12' },
        { label: 'American Water Spaniel', value: '13' },
        { label: 'Anatolian Shepherd Dog', value: '14' },
        { label: 'Appenzeller Sennenhund', value: '15' },
        { label: 'Australian Cattle Dog', value: '16' },
        { label: 'Australian Kelpie', value: '17' },
        { label: 'Australian Shepherd', value: '18' },
        { label: 'Australian Stumpy Tail Cattle Dog', value: '19' },
        { label: 'Australian Terrier', value: '20' },
        { label: 'Azawakh', value: '21' },
        { label: 'Barbet', value: '22' },
        { label: 'Basenji', value: '23' },
        { label: 'Basset Fauve de Bretagne', value: '24' },
        { label: 'Basset Hound', value: '25' },
        { label: 'Bavarian Mountain Scent Hound', value: '26' },
        { label: 'Beagle', value: '27' },
        { label: 'Bearded Collie', value: '28' },
        { label: 'Beauceron', value: '29' },
        { label: 'Bedlington Terrier', value: '30' },
        { label: 'Belgian Laekenois', value: '31' },
        { label: 'Belgian Malinois', value: '32' },
        { label: 'Belgian Sheepdog', value: '33' },
        { label: 'Belgian Tervuren', value: '34' },
        { label: 'Bergamasco Sheepdog', value: '35' },
        { label: 'Berger Picard', value: '36' },
        { label: 'Bernese Mountain Dog', value: '37' },
        { label: 'Bichon Frise', value: '38' },
        { label: 'Biewer Terrier', value: '39' },
        { label: 'Black and Tan Coonhound', value: '40' },
        { label: 'Black Russian Terrier', value: '41' },
        { label: 'Bloodhound', value: '42' },
        { label: 'Bluetick Coonhound', value: '43' },
        { label: 'Boerboel', value: '44' },
        { label: 'Bohemian Shepherd', value: '45' },
        { label: 'Bolognese', value: '46' },
        { label: 'Border Collie', value: '47' },
        { label: 'Border Terrier', value: '48' },
        { label: 'Borzoi', value: '49' },
        { label: 'Boston Terrier', value: '50' },
        { label: 'Bouvier des Flandres', value: '51' },
        { label: 'Boxer', value: '52' },
        { label: 'Boykin Spaniel', value: '53' },
        { label: 'Bracco Italiano', value: '54' },
        { label: 'Braque du Bourbonnais', value: '55' },
        { label: 'Braque Francais Pyrenean', value: '56' },
        { label: 'Briard', value: '57' },
        { label: 'Brittany', value: '58' },
        { label: 'Broholmer', value: '59' },
        { label: 'Brussels Griffon', value: '60' },
        { label: 'Bull Terrier', value: '61' },
        { label: 'Bulldog', value: '62' },
        { label: 'Bullmastiff', value: '63' },
        { label: 'Cairn Terrier', value: '64' },
        { label: 'Canaan Dog', value: '65' },
        { label: 'Cane Corso', value: '66' },
        { label: 'Cardigan Welsh Corgi', value: '67' },
        { label: 'Carolina Dog', value: '68' },
        { label: 'Catahoula Leopard Dog', value: '69' },
        { label: 'Caucasian Shepherd Dog', value: '70' },
        { label: 'Cavalier King Charles Spaniel', value: '71' },
        { label: 'Central Asian Shepherd Dog', value: '72' },
        { label: 'Cesky Terrier', value: '73' },
        { label: 'Chesapeake Bay Retriever', value: '74' },
        { label: 'Chihuahua', value: '75' },
        { label: 'Chinese Crested', value: '76' },
        { label: 'Chinese Shar-Pei', value: '77' },
        { label: 'Chinook', value: '78' },
        { label: 'Chow Chow', value: '79' },
        { label: 'Cirneco dellâ€™Etna', value: '80' },
        { label: 'Clumber Spaniel', value: '81' },
        { label: 'Cocker Spaniel', value: '82' },
        { label: 'Collie', value: '83' },
        { label: 'Coton de Tulear', value: '84' },
        { label: 'Croatian Sheepdog', value: '85' },
        { label: 'Curly-Coated Retriever', value: '86' },
        { label: 'Czechoslovakian Vlcak', value: '87' },
        { label: 'Dachshund', value: '88' },
        { label: 'Dalmatian', value: '89' },
        { label: 'Dandie Dinmont Terrier', value: '90' },
        { label: 'Danish-Swedish Farmdog', value: '91' },
        { label: 'Deutscher Wachtelhund', value: '92' },
        { label: 'Doberman Pinscher', value: '93' },
        { label: 'Dogo Argentino', value: '94' },
        { label: 'Dogue de Bordeaux', value: '95' },
        { label: 'Drentsche Patrijshond', value: '96' },
        { label: 'Drever', value: '97' },
        { label: 'Dutch Shepherd', value: '98' },
        { label: 'English Cocker Spaniel', value: '99' },
        { label: 'English Foxhound', value: '100' },
        { label: 'English Setter', value: '101' },
        { label: 'English Springer Spaniel', value: '102' },
        { label: 'English Toy Spaniel', value: '103' },
        { label: 'Entlebucher Mountain Dog', value: '104' },
        { label: 'Estrela Mountain Dog', value: '105' },
        { label: 'Eurasier', value: '106' },
        { label: 'Field Spaniel', value: '107' },
        { label: 'Finnish Lapphund', value: '108' },
        { label: 'Finnish Spitz', value: '109' },
        { label: 'Flat-Coated Retriever', value: '110' },
        { label: 'French Bulldog', value: '111' },
        { label: 'French Spaniel', value: '112' },
        { label: 'German Longhaired Pointer', value: '113' },
        { label: 'German Pinscher', value: '114' },
        { label: 'German Shepherd Dog', value: '115' },
        { label: 'German Shorthaired Pointer', value: '116' },
        { label: 'German Spitz', value: '117' },
        { label: 'German Wirehaired Pointer', value: '118' },
        { label: 'Giant Schnauzer', value: '119' },
        { label: 'Glen of Imaal Terrier', value: '120' },
        { label: 'Golden Retriever', value: '121' },
        { label: 'Gordon Setter', value: '122' },
        { label: 'Grand Basset Griffon VendÃ©en', value: '123' },
        { label: 'Great Dane', value: '124' },
        { label: 'Great Pyrenees', value: '125' },
        { label: 'Greater Swiss Mountain Dog', value: '126' },
        { label: 'Greyhound', value: '127' },
        { label: 'Hamiltonstovare', value: '128' },
        { label: 'Hanoverian Scenthound', value: '129' },
        { label: 'Harrier', value: '130' },
        { label: 'Havanese', value: '131' },
        { label: 'Hokkaido', value: '132' },
        { label: 'Hovawart', value: '133' },
        { label: 'Ibizan Hound', value: '134' },
        { label: 'Icelandic Sheepdog', value: '135' },
        { label: 'Irish Red and White Setter', value: '136' },
        { label: 'Irish Setter', value: '137' },
        { label: 'Irish Terrier', value: '138' },
        { label: 'Irish Water Spaniel', value: '139' },
        { label: 'Irish Wolfhound', value: '140' },
        { label: 'Italian Greyhound', value: '141' },
        { label: 'Jagdterrier', value: '142' },
        { label: 'Japanese Chin', value: '143' },
        { label: 'Japanese Spitz', value: '144' },
        { label: 'Jindo', value: '145' },
        { label: 'Kai Ken', value: '146' },
        { label: 'Karelian Bear Dog', value: '147' },
        { label: 'Keeshond', value: '148' },
        { label: 'Kerry Blue Terrier', value: '149' },
        { label: 'Kishu Ken', value: '150' },
        { label: 'Komondor', value: '151' },
        { label: 'Kromfohrlander', value: '152' },
        { label: 'Kuvasz', value: '153' },
        { label: 'Labrador Retriever', value: '154' },
        { label: 'Lagotto Romagnolo', value: '155' },
        { label: 'Lakeland Terrier', value: '156' },
        { label: 'Lancashire Heeler', value: '157' },
        { label: 'Lapponian Herder', value: '158' },
        { label: 'Leonberger', value: '159' },
        { label: 'Lhasa Apso', value: '160' },
        { label: 'LÃ¶wchen', value: '161' },
        { label: 'Maltese', value: '162' },
        { label: 'Manchester Terrier (Standard)', value: '163' },
        { label: 'Manchester Terrier (Toy)', value: '164' },
        { label: 'Mastiff', value: '165' },
        { label: 'Miniature American Shepherd', value: '166' },
        { label: 'Miniature Bull Terrier', value: '167' },
        { label: 'Miniature Pinscher', value: '168' },
        { label: 'Miniature Schnauzer', value: '169' },
        { label: 'Mountain Cur', value: '170' },
        { label: 'Mudi', value: '171' },
        { label: 'Neapolitan Mastiff', value: '172' },
        { label: 'Nederlandse Kooikerhondje', value: '173' },
        { label: 'Newfoundland', value: '174' },
        { label: 'Norfolk Terrier', value: '175' },
        { label: 'Norrbottenspets', value: '176' },
        { label: 'Norwegian Buhund', value: '177' },
        { label: 'Norwegian Elkhound', value: '178' },
        { label: 'Norwegian Lundehund', value: '179' },
        { label: 'Norwich Terrier', value: '180' },
        { label: 'Nova Scotia Duck Tolling Retriever', value: '181' },
        { label: 'Old English Sheepdog', value: '182' },
        { label: 'Otterhound', value: '183' },
        { label: 'Papillon', value: '184' },
        { label: 'Parson Russell Terrier', value: '185' },
        { label: 'Pekingese', value: '186' },
        { label: 'Pembroke Welsh Corgi', value: '187' },
        { label: 'Perro de Presa Canario', value: '188' },
        { label: 'Peruvian Inca Orchid', value: '189' },
        { label: 'Petit Basset Griffon VendÃ©en', value: '190' },
        { label: 'Pharaoh Hound', value: '191' },
        { label: 'Plott Hound', value: '192' },
        { label: 'Pointer', value: '193' },
        { label: 'Polish Lowland Sheepdog', value: '194' },
        { label: 'Pomeranian', value: '195' },
        { label: 'Poodle (Miniature)', value: '196' },
        { label: 'Poodle (Standard)', value: '197' },
        { label: 'Poodle (Toy)', value: '198' },
        { label: 'Porcelaine', value: '199' },
        { label: 'Portuguese Podengo', value: '200' },
        { label: 'Portuguese Podengo Pequeno', value: '201' },
        { label: 'Portuguese Pointer', value: '202' },
        { label: 'Portuguese Sheepdog', value: '203' },
        { label: 'Portuguese Water Dog', value: '204' },
        { label: 'Pudelpointer', value: '205' },
        { label: 'Pug', value: '206' },
        { label: 'Puli', value: '207' },
        { label: 'Pumi', value: '208' },
        { label: 'Pyrenean Mastiff', value: '209' },
        { label: 'Pyrenean Shepherd', value: '210' },
        { label: 'Rafeiro do Alentejo', value: '211' },
        { label: 'Rat Terrier', value: '212' },
        { label: 'Redbone Coonhound', value: '213' },
        { label: 'Rhodesian Ridgeback', value: '214' },
        { label: 'Romanian Mioritic Shepherd Dog', value: '215' },
        { label: 'Rottweiler', value: '216' },
        { label: 'Russell Terrier', value: '217' },
        { label: 'Russian Toy', value: '218' },
        { label: 'Russian Tsvetnaya Bolonka', value: '219' },
        { label: 'Saint Bernard', value: '220' },
        { label: 'Saluki', value: '221' },
        { label: 'Samoyed', value: '222' },
        { label: 'Schapendoes', value: '223' },
        { label: 'Schipperke', value: '224' },
        { label: 'Scottish Deerhound', value: '225' },
        { label: 'Scottish Terrier', value: '226' },
        { label: 'Sealyham Terrier', value: '227' },
        { label: 'Segugio Italiano', value: '228' },
        { label: 'Shetland Sheepdog', value: '229' },
        { label: 'Shiba Inu', value: '230' },
        { label: 'Shih Tzu', value: '231' },
        { label: 'Shikoku', value: '232' },
        { label: 'Siberian Husky', value: '233' },
        { label: 'Silky Terrier', value: '234' },
        { label: 'Skye Terrier', value: '235' },
        { label: 'Sloughi', value: '236' },
        { label: 'Slovakian Wirehaired Pointer', value: '237' },
        { label: 'Slovensky Cuvac', value: '238' },
        { label: 'Slovensky Kopov', value: '239' },
        { label: 'Small Munsterlander Pointer', value: '240' },
        { label: 'Smooth Fox Terrier', value: '241' },
        { label: 'Soft Coated Wheaten Terrier', value: '242' },
        { label: 'Spanish Mastiff', value: '243' },
        { label: 'Spanish Water Dog', value: '244' },
        { label: 'Spinone Italiano', value: '245' },
        { label: 'Stabyhoun', value: '246' },
        { label: 'Staffordshire Bull Terrier', value: '247' },
        { label: 'Standard Schnauzer', value: '248' },
        { label: 'Sussex Spaniel', value: '249' },
        { label: 'Swedish Lapphund', value: '250' },
        { label: 'Swedish Vallhund', value: '251' },
        { label: 'Taiwan Dog', value: '252' },
        { label: 'Teddy Roosevelt Terrier', value: '253' },
        { label: 'Thai Ridgeback', value: '254' },
        { label: 'Tibetan Mastiff', value: '255' },
        { label: 'Tibetan Spaniel', value: '256' },
        { label: 'Tibetan Terrier', value: '257' },
        { label: 'Tornjak', value: '258' },
        { label: 'Tosa', value: '259' },
        { label: 'Toy Fox Terrier', value: '260' },
        { label: 'Transylvanian Hound', value: '261' },
        { label: 'Treeing Tennessee Brindle', value: '262' },
        { label: 'Treeing Walker Coonhound', value: '263' },
        { label: 'Vizsla', value: '264' },
        { label: 'Weimaraner', value: '265' },
        { label: 'Welsh Springer Spaniel', value: '266' },
        { label: 'Welsh Terrier', value: '267' },
        { label: 'West Highland White Terrier', value: '268' },
        { label: 'Wetterhoun', value: '269' },
        { label: 'Whippet', value: '270' },
        { label: 'Wire Fox Terrier', value: '271' },
        { label: 'Wirehaired Pointing Griffon', value: '272' },
        { label: 'Wirehaired Vizsla', value: '273' },
        { label: 'Working Kelpie', value: '274' },
        { label: 'Xoloitzcuintli', value: '275' },
        { label: 'Yakutian Laika', value: '276' },
        { label: 'Yorkshire Terrier', value: '277' },
    ];
    cat = [
        { label: 'Abyssinian cat', value: '1' },
        { label: 'Aegean cat', value: '2' },
        { label: 'American Curl', value: '3' },
        { label: 'American Bobtail', value: '4' },
        { label: 'American Shorthair', value: '5' },
        { label: 'American Wirehair', value: '6' },
        { label: 'Arabian Mau ', value: '7' },
        { label: 'Australian Mist', value: '8' },
        { label: 'Asian cat ', value: '9' },
        { label: 'Asian Semi-longhair', value: '10' },
        { label: 'Balinese cat', value: '11' },
        { label: 'Bambino cat', value: '12' },
        { label: 'Bengal cat', value: '13' },
        { label: 'Birman', value: '14' },
        { label: 'Bombay cat', value: '15' },
        { label: 'Brazilian Shorthair', value: '16' },
        { label: 'British Longhair', value: '17' },
        { label: 'British Shorthair', value: '18' },
        { label: 'British Longhair', value: '19' },
        { label: 'Burmese cat', value: '20' },
        { label: 'Burmilla', value: '21' },
        { label: 'California Spangled', value: '22' },
        { label: 'Chantilly-Tiffany', value: '23' },
        { label: 'Chartreux', value: '24' },
        { label: 'Chausie', value: '25' },
        { label: 'Cheetoh cat', value: '26' },
        { label: 'Colorpoint Shorthair', value: '27' },
        { label: 'Cornish Rex', value: '28' },
        { label: 'Cymric cat', value: '29' },
        { label: 'Cyprus cat', value: '30' },
        { label: 'Devon Rex', value: '31' },
        { label: 'Donskoy cat', value: '32' },
        { label: 'Dragon Li', value: '33' },
        { label: 'Dwarf cat', value: '34' },
        { label: 'Egyptian Mau', value: '35' },
        { label: 'European Shorthair', value: '36' },
        { label: 'Exotic Shorthair', value: '37' },
        { label: 'Foldex cat (Official Breed - CCA/AFC)', value: '38' },
        { label: 'German Rex', value: '39' },
        { label: 'Havana Brown', value: '40' },
        { label: 'Highlander cat', value: '41' },
        { label: 'Himalayan cat', value: '42' },
        { label: 'Japanese Bobtail', value: '43' },
        { label: 'Javanese cat', value: '44' },
        { label: 'Kurilian Bobtail', value: '45' },
        { label: 'Khao Manee', value: '46' },
        { label: 'Korat', value: '47' },
        { label: 'Korean Bobtail', value: '48' },
        { label: 'Korn Ja', value: '49' },
        { label: 'Kurilian Bobtail', value: '50' },
        { label: 'LaPerm', value: '51' },
        { label: 'Lykoi', value: '52' },
        { label: 'Maine Coon', value: '53' },
        { label: 'Manx cat', value: '54' },
        { label: 'Mekong Bobtail', value: '55' },
        { label: 'Minskin', value: '56' },
        { label: 'Munchkin cat', value: '57' },
        { label: 'Nebelung', value: '58' },
        { label: 'Napoleon cat ', value: '59' },
        { label: 'Norwegian Forest cat', value: '60' },
        { label: 'Ocicat', value: '61' },
        { label: 'Ojos Azules', value: '62' },
        { label: 'Oregon Rex', value: '63' },
        { label: 'Oriental Bicolor', value: '64' },
        { label: 'Oriental Shorthair', value: '65' },
        { label: 'Oriental Longhair', value: '66' },
        { label: 'PerFold Cat (Experimental Breed - WCF)', value: '67' },
        { label: 'Persian cat', value: '68' },
        { label: 'Traditional Persian', value: '69' },
        { label: 'Peterbald', value: '70' },
        { label: 'Pixie-bob', value: '71' },
        { label: 'Raas cat', value: '72' },
        { label: 'Ragamuffin cat', value: '73' },
        { label: 'Ragdoll', value: '74' },
        { label: 'Russian Blue', value: '75' },
        { label: 'Russian White', value: '76' },
        { label: 'Sam Sawet', value: '77' },
        { label: 'Savannah cat', value: '78' },
        { label: 'Scottish Fold', value: '79' },
        { label: 'Selkirk Rex', value: '80' },
        { label: 'Serengeti cat', value: '81' },
        { label: 'Serrade petit cat', value: '82' },
        { label: 'Siamese cat', value: '83' },
        { label: 'Siberian cat', value: '84' },
        { label: 'Singapura cat', value: '85' },
        { label: 'Snowshoe cat', value: '86' },
        { label: 'Sokoke', value: '87' },
        { label: 'Somali cat', value: '88' },
        { label: 'Sphynx cat', value: '89' },
        { label: 'Suphalak', value: '90' },
        { label: 'Thai cat', value: '91' },
        { label: 'Thai Lilac', value: '92' },
        { label: 'Tonkinese cat', value: '93' },
        { label: 'Toyger', value: '94' },
        { label: 'Turkish Angora', value: '95' },
        { label: 'Turkish Van', value: '96' },
        { label: 'Ukrainian Levkoy', value: '97' },
    ];

    const breedsList = isDog ? dog : cat;

    let breedsString = "";

    for (let i = 0; i < breedArray.length; i++) {
        breedsString += breedsList[breedArray[i] - 1].label + " "
    }

    return breedsString.length > 0 ? breedsString : "Mix";
}

function shouldPetBeShown(petData, queryData, dob, weight, breed) {
    const isDog = queryData.type.isDog;
    const houseTrainedFilter = isDog ? queryData.houseTrained.dog : queryData.houseTrained.cat;
    const kidFriendlyFilter = isDog ? queryData.friendlyWith.dog.isKidFriendly : queryData.friendlyWith.cat.isKidFriendly;
    const dogFriendlyFilter = isDog ? queryData.friendlyWith.dog.isDogFriendly : queryData.friendlyWith.cat.isDogFriendly;
    const catFriendlyFilter = isDog ? queryData.friendlyWith.dog.isCatFriendly : queryData.friendlyWith.cat.isCatFriendly;
    const maleFilter = isDog ? queryData.gender.dog.isMale : queryData.gender.cat.isMale;
    const femaleFilter = isDog ? queryData.gender.dog.isFemale : queryData.gender.cat.isFemale;
    const ageRange = isDog ? queryData.ageRange.dog : queryData.ageRange.cat;
    const sizeRange = isDog ? queryData.size.dog : queryData.size.cat;
    const breedArray = isDog ? queryData.breed.dog : queryData.breed.cat; 

    function getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    if (houseTrainedFilter && !petData.houseTrained) {
        return false;
    } else if (kidFriendlyFilter && !petData.friendlyWith.kids) {
        return false;
    } else if (dogFriendlyFilter && !petData.friendlyWith.dogs) {
        return false;
    } else if (catFriendlyFilter && !petData.friendlyWith.cats) {
        return false;
    } else if (maleFilter != femaleFilter) {
        console.log("Unequal parameters")
        if (maleFilter && petData.gender != "Male") {
            return false;
        } else if (femaleFilter && petData.gender != "Female") {
            return false;
        }
    }

    const ageYears = getAge(dob);

    let ageClass; 

    if (isDog ? ageYears <= 2 : ageYears <= 1) {
        ageClass = 0; // Puppy or Kitten
    } else if (isDog ? ageYears <= 4 : ageYears <= 6) {
        ageClass = 1; // Young
    } else if (isDog ? ageYears <= 7 : ageYears <= 9) {
        ageClass = 2; // Adult
    } else {
        ageClass = 3; // Old
    }
    
    if (!ageRange[ageClass].isSelected) {
        return false;
    }

    let weightClass;

    if (isDog ? weight <= 25 : weight <= 5) {
        weightClass = 0;
    } else if (isDog ? weight <= 60 : weight <= 12) {
        weightClass = 1;
    } else {
        weightClass = 2;
    }

    if (!sizeRange[weightClass].isSelected) {
        return false;
    }

    if (breedArray.length > 0) {
        const foundBreed = breed.some(r => breedArray.indexOf(r) >= 0)
        if (!foundBreed) {
            return false;
        }
    }
    
    return true;
}

export default function addAPet(
    adoptionLocationName,
    email,
    name,
    breed,
    isDog,
    isMale,
    dob,
    isKidFriendly,
    isDogFriendly,
    isCatFriendly,
    price,
    weight,
    // coat,
    activityLevel,
    houseTrained,
    medicalStatus,
    description,
    picOne,
    picTwo,
    picThree,
    picFour,
    picFive,
    picSix
) {
    const petsRef = firebase.firestore().collection('Pets');

  const validatePetData = (
        adoptionLocationName &&
        email &&
        name &&
        breed &&
        dob &&
        price &&
        weight &&
        // coat &&
        activityLevel &&
        medicalStatus &&
        description &&
        picOne &&
        picTwo &&
        picThree &&
        picFour &&
        picFive &&
        picSix
    );

    if (validatePetData) {
        // Add the data for a pet
        const petData = {
            adoptionLocationName: adoptionLocationName,
            email: email,
            name: name,
            breed: breed,
            isDog: isDog,
            isMale: isMale,
            dob: dob,
            isKidFriendly: isKidFriendly,
            isDogFriendly: isDogFriendly,
            isCatFriendly: isCatFriendly,
            price: price,
            weight: weight,
            // coat: weight,
            activityLevel: activityLevel,
            houseTrained: houseTrained,
            medicalStatus: medicalStatus,
            description: description,
            pictures: [picOne, picTwo, picThree, picFour, picFive, picSix],
        };

        // Upload data to firestore
        petsRef
            .add(petData)
            .then((petID) => {
                const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);
                // Add animal to Shelter List
                isDog ? shelterInfoRef
                    .update( {
                        Dogs: firebase.firestore.FieldValue.arrayUnion(petID.id)
                    }).then(console.log("Added to dogs"))
                    : shelterInfoRef
                    .update({
                        Cats: firebase.firestore.FieldValue.arrayUnion(petID.id)
                    }).then(console.log("Added to cats"))
            })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function getPets(setPetData, query) {
    const isDog = query.type.isDog;

    const usersRef = firebase.firestore().collection('Pets');
    const limit = 100
    usersRef
        .where("isDog", "==", isDog)
        .limit(limit)
        .get()
        .then((docSnapshot) => {
            let dataList = [];
            let index = 1;
            let length = docSnapshot.size;
            docSnapshot.forEach((doc) => {
                const data = {
                    petID: doc.id,
                    id: index,
                    email: doc.data().email,
                    name: doc.data().name,
                    age: getAge(doc.data().dob),
                    adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                    distanceAway: '2 miles away', // Need functionality
                    gender: doc.data().isMale ? 'Male' : 'Female',
                    breed: breedIdToString(doc.data().breed, isDog), // Need functionality
                    friendlyWith: {
                        kids: doc.data().isKidFriendly,
                        dogs: doc.data().isDogFriendly,
                        cats: doc.data().isCatFriendly,
                    },
                    price: `$${doc.data().price}`,
                    weight: `${doc.data().weight} lbs`,
                    activityLevel: doc.data().activityLevel,
                    houseTrained: doc.data().houseTrained,
                    medicalStatus: doc.data().medicalStatus,
                    description: doc.data().description,
                    pictures: doc.data().pictures,
                }

                if (shouldPetBeShown(data, query, doc.data().dob, doc.data().weight, doc.data().breed)) {
                    dataList.push(data)
                }

                index++
                if (index === length + 1) {
                    setPetData(dataList);
                }
            })
        });
}

export function swipeRight(
    petID,
    pictureNumber,
) {
  const email = useSelector((state) => state.userAuth.email)
  const petsRef = firebase.firestore().collection('Swipes').doc(email); // need email for id

    const validatePetData = (
        email &&
        petID &&
        pictureNumber
    );

    if (validatePetData) {
        // Upload data to firestore
        petsRef
            .update( {
              LikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
            })
            .then(() => {
                // const petsRef = firebase.firestore().collection('Swipes').doc(email);
            })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function swipeLeft(
    petID,
    pictureNumber,
) {
  const email = useSelector((state) => state.userAuth.email)
  const petsRef = firebase.firestore().collection('Swipes').doc(email); // need email for id

  const validatePetData = (
        email &&
        petID &&
        pictureNumber
    );

    if (validatePetData) {
        // Upload data to firestore
        petsRef
            .update( {
              LikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
            })
            // .then(() => {
            //     // const petsRef = firebase.firestore().collection('Swipes').doc(email);

            // })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function getLikedPets(email, setPetData) {
    // Get swipes document for specific account
    const swipesRef = firebase.firestore().collection('Swipes').doc(email);
    const petList = [];

    const getPetData = () => {
            swipesRef
        .get()
        .then((docSnapshot) => {
            const data = docSnapshot.data();
            const likedPetIDs = data.LikedPets;
            let index = 1;
            let numberOfIds = likedPetIDs.length
            for (const petId of likedPetIDs) {
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => {
                        function picCallBack(value) {
                            pictures = value;
                            const petData = {
                                petID: doc.id,
                                id: index,
                                // 'Like', 'Dislike', ''
                                email: doc.data().email,
                                result: '',
                                name: doc.data().name,
                                age: getAge(doc.data().dob), // need to undo
                                adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                                distanceAway: '2 miles away', // Need functionality
                                gender: doc.data().isMale ? 'Male' : 'Female',
                                breed: breedIdToString(doc.data().breed, isDog), // Need functionality
                                friendlyWith: {
                                    kids: doc.data().isKidFriendly,
                                    dogs: doc.data().isDogFriendly,
                                    cats: doc.data().isCatFriendly,
                                },
                                price: `$${doc.data().price}`,
                                weight: `${doc.data().weight} lbs`,
                                activityLevel: doc.data().activityLevel,
                                houseTrained: doc.data().houseTrained,
                                medicalStatus: doc.data().medicalStatus,
                                description: doc.data().description,
                                pictures: pictures,
                            }
                            petList.push(petData)
                            if (index === numberOfIds) {
                                setPetData(petList)
                            }
                            index++;
                        }
                        getPhotos(petId, picCallBack)
                    })
            }
        });
    }
    getPetData()
}

export function removeLikedPet(email, petID) {
    // Get swipes document for specific account
    const swipesRef = firebase.firestore().collection('Swipes').doc(email);
    swipesRef.update({
        LikedPets: firebase.firestore.FieldValue.arrayRemove(petID),
        DislikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
    })

}

// export function animalShelterDogs(email, setPetData) {
//     // Get swipes document for specific account
//     const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);
//     const petList = [];

//     const getPetData = () => {
//         shelterInfoRef
//         .get()
//         .then((docSnapshot) => {
//             const data = docSnapshot.data();
//             const dogs = data.Dogs;
//             let index = 1;
//             let numberOfIds = dogs.length
//             for (const petId of dogs) {
//                 const petsRef = firebase.firestore().collection('Pets').doc(petId);
//                 petsRef
//                     .get()
//                     .then((doc) => {
//                             const petData = {
//                                 petID: doc.id,
//                                 id: index,
//                                 // 'Like', 'Dislike', ''
//                                 result: '',
//                                 name: doc.data().name,
//                                 age: getAge(doc.data().dob), // need to undo
//                                 adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
//                                 distanceAway: '2 miles away', // Need functionality
//                                 gender: doc.data().isMale ? 'Male' : 'Female',
//                                 breed: 'need fx', // Need functionality
//                                 friendlyWith: {
//                                     kids: doc.data().isKidFriendly,
//                                     dogs: doc.data().isCatFriendly,
//                                     cats: doc.data().isDogFriendly,
//                                 },
//                                 price: `$${doc.data().price}`,
//                                 weight: `${doc.data().weight} lbs`,
//                                 activityLevel: doc.data().activityLevel,
//                                 houseTrained: doc.data().houseTrained,
//                                 medicalStatus: doc.data().medicalStatus,
//                                 description: doc.data().description,
//                                 pictures: pictures || [],
//                             }
//                             petList.push(petData)
//                             if(index === numberOfIds) {
//                                 setPetData(petList)
//                             }
//                             index++;
//                     })
//     }

//     getPetData()
// }

export function getAnimalShelterPets(email, setCats, setDogs) {
    // Get swipes document for specific account
    const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);

    const getPetData = () => {
        shelterInfoRef
            .onSnapshot((docSnapshot) => {
            const catList = [];
            const dogList = [];
            const data = docSnapshot.data();
            const cats = data.Cats;
            const dogs = data.Dogs;
            let catIndex = 1;
            let dogIndex = 1;

            for (const petId of cats) {
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => {
                        const petData = {
                            petID: doc.id,
                            id: catIndex,
                            result: '',
                            name: doc.data().name,
                            age: getAge(doc.data().dob), // need to undo
                            adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                            distanceAway: '2 miles away', // Need functionality
                            gender: doc.data().isMale ? 'Male' : 'Female',
                            breed: breedIdToString(doc.data().breed, false), // Need functionality
                            friendlyWith: {
                                kids: doc.data().isKidFriendly,
                                dogs: doc.data().isDogFriendly,
                                cats: doc.data().isCatFriendly,
                            },
                            price: `$${doc.data().price}`,
                            weight: `${doc.data().weight} lbs`,
                            activityLevel: doc.data().activityLevel,
                            houseTrained: doc.data().houseTrained,
                            medicalStatus: doc.data().medicalStatus,
                            description: doc.data().description,
                            pictures: doc.data().pictures,
                        }
                        catList.push(petData)
                        if (catIndex === cats.length) {
                            setCats([])
                            setCats(catList)
                        }
                        catIndex++;
                    })
            }
            for (const petId of dogs) {
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => {
                        const petData = {
                            petID: doc.id,
                            id: dogIndex,
                            result: '',
                            name: doc.data().name,
                            age: getAge(doc.data().dob), // need to undo
                            adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                            distanceAway: '2 miles away', // Need functionality
                            gender: doc.data().isMale ? 'Male' : 'Female',
                            breed: breedIdToString(doc.data().breed, true), // Need functionality
                            friendlyWith: {
                                kids: doc.data().isKidFriendly,
                                dogs: doc.data().isDogFriendly,
                                cats: doc.data().isCatFriendly,
                            },
                            price: `$${doc.data().price}`,
                            weight: `${doc.data().weight} lbs`,
                            activityLevel: doc.data().activityLevel,
                            houseTrained: doc.data().houseTrained,
                            medicalStatus: doc.data().medicalStatus,
                            description: doc.data().description,
                            pictures: doc.data().pictures,
                        }
                        dogList.push(petData)
                        if (dogIndex === dogs.length) {
                            setDogs([])
                            setDogs(dogList)
                        }
                        dogIndex++;
                    })
            }
        });
    }
    getPetData()
}

async function getPhotos(petID, picCallBack) {
    let pictures = [];
    firebase.storage().ref().child(`${petID}/one`).getDownloadURL()
    .then((url) => {
        pictures.push(url);
        firebase.storage().ref().child(`${petID}/two`).getDownloadURL()
        .then((url) => {
            pictures.push(url);
            firebase.storage().ref().child(`${petID}/three`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
            })
            firebase.storage().ref().child(`${petID}/four`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
            })
            firebase.storage().ref().child(`${petID}/five`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
                firebase.storage().ref().child(`${petID}/six`).getDownloadURL()
                .then((url) => {
                    pictures.push(url);
                    picCallBack(pictures)
                })
            })
        })
    })
    .catch((error) => {
        // Handle any errors
    });
}