# ---- Step 1: Build the Next.js app ----
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all files and build the app
COPY . .
RUN npm run build

# ---- Step 2: Run the Next.js app ----
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN npm install --production

# Set environment variables
ENV NODE_ENV production

EXPOSE 3002

# Start the app
CMD ["npm", "start", "-p", "3002"]
