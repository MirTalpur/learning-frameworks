package main

import (
	"fmt"
)

type gopher struct{
  name string
  age int
  isAdult bool
}

func (g gopher) jump() string {
  if g.age < 64 {
    return g.name + " can jump HIGH"
  }
  return g.name + " can still jump"
}

// This will pass it in as a copy
// func validateAge(g gopher) {
//   g.isAdult = g.age >= 21
// }

func validateAge(g *gopher){
  g.isAdult = g.age >= 21
}

func main(){
  phil := &gopher{name: "Phil", age: 30 } // this will create a pointer to the gopher struct and store in gopher1
  validateAge(phil)
}
