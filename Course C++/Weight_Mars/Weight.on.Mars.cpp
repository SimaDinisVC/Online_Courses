#include <iostream>

using namespace std;

int main() {
  cout << "In this Simple Program in C++ convert your weight on Earth to weight on Mars.\nEnter your weight into kg:\n";
  double weight_earth;
  cin >> weight_earth;
  double weight_mars = (weight_earth/9.81) * 3.711;
  cout << "Your weight into the Mars is " << weight_mars <<"kg.\n";
}