# Declaring Variables

age = 10
name = "Chris"

isCold = True
isHot = True
year = 2111

sentence = "hello my name is {} and I am {} years old.".format(name, age)

print(sentence)

# If / Else Statements

if age > 18:
    print("you are old")
else:
    print("you are not old")

if isHot:
    print("It's Damn Hot {}".format(name))
else:
    print("It's not yet hot {}".format(name))

if year in range (2000, 2100):
    print("Welcome to the 21st Century {}".format(name))
elif year < 2000:
    print("You Are in the past!")
elif year > 2100:
    print("You are in the future!")

#Defining Functions

def greetPlayer():
    print("Hello {}. You have entered the future. The year is {}.".format(name, year))

greetPlayer()

#Pass In Value
def greetEnemy(name="Seth", age=200, planet="Namek"):
    print("Your enemy is {}... he is a {} year old alien from the planet {}.".format(name, age, planet))
#Changing Default Value
greetEnemy("Mark", 40, "Vegeta")

def trippleprint(hello):
    print("{}{}{}".format(hello,hello,hello))

trippleprint("hello")

#Lists

dognames = ['Rex', "Phony", "Dingus", "Buttmunch"]
print(dognames)

dognames.insert(0, "PuppyFace")

print(dognames)

dognames.insert(3, "FunnyButt")
print(dognames)

print(dognames[2])

del(dognames[3])
print(len(dognames))

dognames[1] = "Jabber"
print(dognames)

#Loops

for dog in dognames:
    print(dog)


for x in range(1, 10):
    print(x)

#White Loop (commented Out To Not Crash)
"""while isCold == True:
    print(x)"""

numbers = range(1, 1000)
for num in numbers:
    if num >= 90:
        print

#Dictionary

dogs = {"Fido":8, "Sally":12, "Sean":9}
print(dogs["Sally"])

dogs["Sarah"] = 6
dogs["Fido"] = 10

print(dogs)

#Creating Dictionary From Lists
words = ["Fallacious", "Incredible", "Assault"]
definitions = ["False", "Exceptional", "Attack"]

cooldictionary = {words[0]:definitions[0],words[1]:definitions[1],words[2]:definitions[2]}

print(cooldictionary)

#Classes

class Dog:

    def __init__(self, age):
        self.name = name
        self.age = age

    dogInfo = "Dogs are cool"

    def bark(self, str):
        print("BARK!" + str)

mydog = Dog(12)
mydog.bark("motherfucker")
mydog.name = "Fido"
mydog.age = 7
print(mydog.name)
print(mydog.age)
mydog.bark("motherfucker")


Dog.dogInfo = "Dogs Are Not Cool"
print(Dog.dogInfo)

class Car:

    def age(self, year):
        return(2020 - year)
    
myCarAge = Car()
myCarAge = myCarAge.age(2007)
print(myCarAge)