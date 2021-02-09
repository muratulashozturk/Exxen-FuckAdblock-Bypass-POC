# Exxen FuckAdBlock(AntiAdblock) Bypasser POC
I will attach the Radiant Media Player FuckAdblock structure below.
![RMP Structure](https://i.ibb.co/V9jWHp2/RMPStructure.png)

# What We Changed?
If we go to line **8975** in rmp.min.js, we see there is **if (this.adBlockerDetection)** then we will look to **else** there is **L.call(this)** so simply we deleted the If code and paste **L.call(this)** For more please look at: https://github.com/muratulashozturk/Exxen-FuckAdblock-Bypass-POC/commit/e9ce707758a076f7997a5936aa176d2f6931f60d

# Disclaimer
This is a proof of concept and educational purposes only! I am not responsible what people did with this.

# Contact
If you want me to remove this repository, please contact me at **ozturkmuratulas@hotmail.com**
