
import 'reflect-metadata'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    })
  ]
})
class AppModule {}

async function bootstrap() {
  console.log('Nest GraphQL Gateway skeleton. Implement resolvers/stitching here.')
}
bootstrap()
