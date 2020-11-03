/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { startOfHour, isBefore } from "date-fns";

export function ValidateDate(validationOptions?: ValidationOptions): any {
	return function (object: Object, propertyName: string): void {
		registerDecorator({
			name: "validateDate",
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments): any {
          const hourStart = startOfHour(new Date(value))
          if (!isBefore(hourStart, new Date())) {
            return true;
          }
				}
			}
		});
	};
}