// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const reactRecommended = require('eslint-plugin-react/configs/recommended')

export default tseslint.config(
  eslint.configs.recommended,
  reactRecommended,
  ...tseslint.configs.recommendedTypeChecked,
);