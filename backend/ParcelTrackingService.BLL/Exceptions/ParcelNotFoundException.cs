namespace ParcelTrackingService.BLL.Exceptions;

public class ParcelNotFoundException(string parcelId)
    : Exception($"Parcel with id: {parcelId} not found");
