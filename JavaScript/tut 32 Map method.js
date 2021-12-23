                // Map data Structure

                const person=new Map();
                console.log(typeof person);
                person.set('Ashish Khati','CSE');
                person.set(1,'Ayush');
                person.set('Milk',10);
                person.set([1,2,3,4],'Array');
                console.log(person.keys());
                console.log(person.values());
                console.log(person.get(1));
                
                for(let per of person.keys())
                {
                    console.log(per,typeof per)
                }
                
                for(let p of person.values())
                {
                    console.log(p,typeof p)
                }
                
                
                
                for(let p of person)
                {
                    console.log(p,typeof p)
                }



                for(let [aa,bb] of person)
                {
                    console.log(aa,bb);
                }


                const abc=new Map([['Ashish Khati','String'],[1,"Number"],[2.4,'float'],['a','char'],[[11,22,33,44,55],'Array'],[{'@':'@ Symbol','!':"! symbol"},'Object']]);
                console.log(abc,typeof abc, Array.isArray(abc));
