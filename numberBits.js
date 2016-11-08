function numberBits (someNumber) {
	// someNumber must be between -2147483648 and 2147483647
	// all javascript numbers are 64-bit floats
	if (someNumber > 0x7fffffff || someNumber < -0x80000000) { 
		throw new TypeError("arrayFromMask - out of range"); 
	}

	for (var nShifted = someNumber, bitArray = []; nShifted; bitArray.push(Boolean(nShifted & 1)), nShifted >>>= 1)

	return bitArray
}