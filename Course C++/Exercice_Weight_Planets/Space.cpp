#include <iostream>

using namespace std;
int main() {
  ///////////////////////PESO///////////////////////
  double weight_earth;
  cout << "Enter your weight on earth:\n";
  cin >> weight_earth;
  double weight = 0.0;
  ///////////////////////FIM////////////////////////
  ///////////////////////MENÚ///////////////////////
  cout << "Choose the planet you want to fight\n1 - Mercury\n2 - Venus\n3 - Mars\n4 - Jupiter\n5 - Saturn\n6 - Uranus\n7 - Neptune\n: ";
  ///////////////////////FIM////////////////////////
  int planet;
  cin >> planet;
  switch (planet){
      case 1 :
      weight = weight_earth * 0.38;
      cout << "Its weight on the planet Mercury is " << weight << ".";
      break;
      case 2 :
      weight = weight_earth * 0.91;
      cout << "Its weight on the planet Venus is " << weight << ".";
      break;
      case 3 :
      weight = weight_earth * 0.38;
      cout << "Its weight on the planet Mars is " << weight << ".";
      break;
      case 4 :
      weight = weight_earth * 2.34;
      cout << "Its weight on the planet Jupiter is " << weight << ".";
      break;
      case 5 :
      weight = weight_earth * 1.06;
      cout << "Its weight on the planet Saturn is " << weight << ".";
      break;
      case 6 :
      weight = weight_earth * 0.92;
      cout << "Its weight on the planet Uranus is " << weight << ".";
      break;
      case 7 :
      weight = weight_earth * 1.19;
      cout << "Its weight on the planet Neptune is " << weight << ".";
      break;
      default :
      cout << "There is no data from other planets with this number in the menu.";
  }
}