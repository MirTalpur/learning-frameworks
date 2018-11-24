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

func main() {
  var a int
  a = 30
  var aPtr *int
  aPtr = &a
  // address of aPtr
  fmt.Println("address of aPtr %p", &aPtr)
  // address of aPtr
  fmt.Println("value of aPtr %p", aPtr)
  // address of a
  fmt.Println("address of aPtr %p", &a)
  // value of aPtr derefernce aPtr
  fmt.Println("value of aPtr derefernce %d", *aPtr)
  a = 20
  // value of aPtr derefernce aPtr
  fmt.Println("value of aPtr derrefernce after a change %d", *aPtr)
  *aPtr = 500
  fmt.Println("address of a after aPtr change %d", a)
}
