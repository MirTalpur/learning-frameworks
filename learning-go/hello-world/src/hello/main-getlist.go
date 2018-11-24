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

func (h horse) jump() string {
  
}

func validateAge(g *gopher){
  g.isAdult = g.age >= 21
}

type jumper interface {
  jump() string
}

func getList() []jumper {
  phil := &gopher{name: "Phil", age: 30}
  noodles := &gopher{name: "Noodles", age: 99}
  list := []*gopher{phil, noodles}
  return list
}
func main() {
  gopherList := getList()
  for _, gopher := range gopherList {
    fmt.Println(gopher.jump())
  }
}
