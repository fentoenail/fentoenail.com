import time
import random
number = 0
randomTime = random.randint(1, 1000)
test1 = False

for i in range(randomTime):
    number += 1
    print(number)
    #time.sleep(0.25)
    if number == randomTime:
        print("Test")
        test1 = True