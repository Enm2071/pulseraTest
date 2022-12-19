import {describe, expect, test} from '@jest/globals';
import { applyCurrencyFormat } from "../currencyFormat";

test('CurrencyFormat', () => {
    describe('applyCurrencyFormat', () => {
        const test_data = '1000';
        const test_data_with_decimal = '100.00';
        const nan_value = 'abc';

        it('should return the currency format', () => {
            expect(applyCurrencyFormat(test_data)).toBe('RD$ 1,000');
        });

        it('should return the currency format without decimal', () => {
            expect(applyCurrencyFormat(test_data_with_decimal)).toBe('RD$ 100');
        });

        it('should return null', () => {
            expect(applyCurrencyFormat(nan_value)).toBe(null);
        });
    });
});