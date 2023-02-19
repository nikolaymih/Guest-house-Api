export const requiredMessageValidation = (name: string) => {
	return `${name} must be provided!`;
}

export const minRequiredMessageVal = (name: string, value: number) => {
	return `${name} must be at least ${value} characters`;
}

export const validationErrorMessage = (name: string) => {
	return `Validation for ${name} has failed`;
}