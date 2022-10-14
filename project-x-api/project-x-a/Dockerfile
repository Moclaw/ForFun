FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["project-x-a/project-x-a.csproj", "project-x-a/"]
RUN dotnet restore "project-x-a/project-x-a.csproj"
COPY . .
WORKDIR "/src/project-x-a"
RUN dotnet build "project-x-a.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "project-x-a.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "project-x-a.dll"]
