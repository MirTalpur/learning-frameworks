package main

import (
	"fmt"
)

func main() {
  i := 0
  isLessThanFive := true
  for isLessThanFive {
    if i >= 5 {
      isLessThanFive = true
    }
    fmt.Println(i)
    i++
  }
  // you can also do the following below
  // for {
  //   if i >= 5 {
  //     break
  //   }
  //   fmt.Println(i)
  //   i++
  // }
}
