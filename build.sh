#!/bin/bash

uglifyjs 									                                            \
    ./featherweight.src.js							                                    \
    --screw-ie8									                                        \
    -c hoist_vars,hoist_funs,unsafe,unsafe_comps,keep_fargs,pure_getters                \
    -m sort,toplevel								                                    \
| awk '{ printf("<canvas id=V onclick=C=-Y><script>%s</script>", substr($0, 1, length($0)-1)); }'    \
> ./dist/featherweight.html
